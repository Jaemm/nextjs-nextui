"use client";

import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export const HomeCard = () => {
  const list = [
    {
      title: "Orange",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      price: "$10.00",
    },
    {
      title: "Lemon",
      price: "$5.30",
    },
    {
      title: "Avocado",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      price: "$8.00",
    },
    {
      title: "Banana",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      price: "$12.20",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
