import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Event } from "../types/general";
import Image from "next/image";
import { useLazyQuery } from "@apollo/client";
import { setGlobalState } from "../context/state";
import { EVENTS_BY_ID } from "../graphql/query/eventById";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const StyledContainer = styled.div`
  display: flex;
  .swiper {
    width: 100%;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
    max-width: 550px;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  .mySwiper2 {
    height: 60%;
    width: 100%;
  }

  .mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 40px;
  }

  .mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  .mySwiper .swiper-slide-thumb-active {
    opacity: 1;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-button-next,
  .swiper-button-prev {
    &::after {
      color: var(--primary);
    }
  }
`;
const StyledContent = styled.div`
  width: 100%;
  padding: 0 30px;
`;
const StyledTitle = styled.h2`
  text-align: center;
  font-style: italic;
  max-width: 70%;
  margin: 0 auto;
  padding-bottom: 30px;
`;
const StyledDescription = styled.div`
  padding-bottom: 30px;
`;
const StyledMainImage = styled(Image)`
  padding: 40px;
`;

function EventView() {
  const router = useRouter();
  const [eventData, setEventData] = useState<Event | undefined>(undefined);
  const [eventsById, { loading }] = useLazyQuery(EVENTS_BY_ID, {
    onCompleted: (data) => {
      if (!data) return;
      setEventData(data.eventsById.length > 0 ? data.eventsById[0] : undefined);
    },
  });

  useEffect(() => {
    if (!router) return;
    const id = router.query.id;
    console.log(id);
    eventsById({ variables: { id: String(id) } });
  }, [router]);

  useEffect(() => {
    setGlobalState("isLoading", loading);
  }, [loading]);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[3].subpages} />
        <StyledContent>
          <StyledTitle>{eventData?.title}</StyledTitle>
          <StyledDescription>{eventData?.longDescription}</StyledDescription>
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
            loop={true}
          >
            {eventData?.images.map((image) => (
              <SwiperSlide>
                <StyledMainImage
                  src={image}
                  alt="Test"
                  width={300}
                  height={300}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {eventData?.images.map((image) => (
              <SwiperSlide>
                <Image src={image} alt="Test" width={300} height={300} />
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
}

export default EventView;
