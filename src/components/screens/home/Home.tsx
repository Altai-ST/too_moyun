"use client";

import Gallery from "@/components/layouts/gallery/Gallery";
import Layout from "@/components/layouts/Layout";
import News from "@/components/layouts/news/News";
import Statistic from "@/components/layouts/statistic/Statistic";
import {
  getFirstCards,
  getFirstGallery,
} from "@/GlobalRedux/Features/firstGetData/firstGetDataSlice";
import {
  getCards,
  getGallery,
} from "@/GlobalRedux/Features/pagination/paginationSlice";
import { AppDispatch, RootState } from "@/GlobalRedux/store";
import { Size, useReSize } from "@/hooks/useReSize";
import { IGalleryData } from "@/interfaces/gallery.interface";
import { ICards } from "@/interfaces/news.interface";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home: FC = () => {
  const cards = useSelector((state: RootState) => state.firstData);

  const dispatch = useDispatch<AppDispatch>();
  const size: Size = useReSize();

  useEffect(() => {
    dispatch(getFirstCards({ page: 1, pageSize: 4 }));
    dispatch(getFirstGallery({ page: 1, pageSize: 5 }));
  }, []);

  return (
    <>
      <div className="flex laptop:justify-center justify-start laptop:mt-10 mt-0 bg-gray-300 py-10">
        <div className="h-600 laptop:w-1000 w-full ">
          <Carousel slideInterval={5000}>
            {cards.newsCards.results.map((el) => {
              return (
                <div className="relative">
                  <Link href={`/newsPage/${el.id}`}>
                    <Image
                      className="w-full h-660"
                      src={el === null ? "" : el.img}
                      width={1000}
                      height={660}
                      alt="..."
                    />
                    <div className="absolute top-40% left-0 text-center w-full text-white">
                      <p className="text-5xl font-bold mb-5">
                        {el === null ? "" : el.title}
                      </p>
                      {size.width === undefined ? (
                        <></>
                      ) : size.width >= 1024 ? (
                        <p className="laptop:text-sm mx-20">
                          {el === null ? "" : el.text}
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </Link>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <News cards={cards.newsCards} />
      <Gallery gallery={cards.gallery} />
      <Statistic />
    </>
  );
};

export default Home;
