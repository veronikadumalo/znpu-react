import { builder } from "../builder";

const Persona = builder.inputType("Persona", {
  fields: (t) => ({
    name: t.string({ required: true }),
    email: t.string({ required: true }),
  }),
});

builder.prismaObject("Deparments", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    persons: t.relation("persons"),
  }),
});

builder.queryField("deparments", (t) =>
  t.prismaField({
    type: ["Deparments"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.deparments.findMany({ ...query }),
  })
);

builder.mutationField("createDepartment", (t) =>
  t.prismaField({
    type: "Deparments",
    args: {
      title: t.arg.string({ required: true }),
      input: t.arg({
        type: Persona,
        required: true,
      }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { title, input } = args;

      return prisma.deparments.create({
        ...query,
        data: {
          title,
          persons: { create: [{ name: input.name, email: input.email }] },
        },
      });
    },
  })
);

builder.mutationField("deleteDepartment", (t) =>
  t.prismaField({
    type: "Deparments",
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { id } = args;

      await prisma.person.deleteMany({
        where: {
          deparmentId: id,
        },
      });

      return prisma.deparments.delete({
        ...query,
        where: {
          id,
        },
      });
    },
  })
);

builder.mutationField("updateDepartment", (t) =>
  t.prismaField({
    type: "Deparments",
    args: {
      title: t.arg.string({ required: true }),
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { title, id } = args;

      return prisma.deparments.update({
        ...query,
        where: {
          id,
        },
        data: {
          title,
        },
      });
    },
  })
);
