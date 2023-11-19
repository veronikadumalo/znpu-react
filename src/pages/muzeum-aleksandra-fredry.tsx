import styled from "styled-components";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import { useLazyQuery } from "@apollo/client";
import { EVENTS_BY_TYPE } from "../graphql/query/eventsByType";
import { useEffect, useState } from "react";
import { setGlobalState } from "../context/state";
import { Event } from "../types/general";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";
import Image from "next/image";

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
    max-width: 850px;
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
  .mySwiper .swiper-wrapper {
    justify-content: center;
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
  @media (max-width: 700px) {
    padding-bottom: 10px;
  }
`;
const StyledMainImage = styled(Image)`
  padding: 40px;
  object-fit: contain !important;
`;
const StyledDescription = styled.div``;

const MuzeumAleksandraFresry = () => {
  const [pageData, setPageData] = useState<Event | undefined>(undefined);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [eventsByType, { loading }] = useLazyQuery(EVENTS_BY_TYPE, {
    onCompleted: (data) => {
      if (!data) return;
      setPageData(data.eventsByType[0]);
    },
  });
  useEffect(() => {
    eventsByType({ variables: { type: "muzeumAF" } });
  }, []);
  useEffect(() => {
    setGlobalState("isLoading", loading);
  }, [loading]);
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[2].subpages} />
        <StyledContent>
          {pageData?.title && <StyledTitle>{pageData?.title}</StyledTitle>}
          {pageData?.longDescription && (
            <StyledDescription>
              <span
                dangerouslySetInnerHTML={{
                  __html: String(pageData?.longDescription),
                }}
              />
            </StyledDescription>
          )}
          {pageData?.images && (
            <>
              <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
                loop={true}
              >
                {pageData?.images.map((image) => (
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
                {pageData?.images.map((image) => (
                  <SwiperSlide>
                    <Image src={image} alt="Test" width={300} height={300} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
};

export default MuzeumAleksandraFresry;
