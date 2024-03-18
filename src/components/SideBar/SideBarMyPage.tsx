import useAuth from "@/hooks/useAuth.tsx";

import { NavLink } from "react-router-dom";
import ButtonCommon from "../button/ButtonCommon";
import { Advertisement } from "../Advertisement";
const arrAds = [
  "s-l1200.webp",
  "coke-print-ad.jpg",
  "7_Up_-_You_like_it,_it_likes_you,_1948.jpg",
];
export function SideBarMyPage({ user }) {
  return (
    <div className="coli-sidebar flex-grow-0 basis-[250px]">
      <ul className="flex flex-col">
        <li className="flex flex-col p-5">
          <div className="mx-auto h-[180px] w-40 border-2">
            <img
              className="h-full w-full object-cover"
              src={user.avatar}
              alt=""
            />
          </div>
          <span className="my-3 text-center font-bold">ID: {user.id}</span>
        </li>
        <li className="p-3">
          <div className="mx-auto py-2">
            <h3 className="mb-5 border-b-2 text-2xl font-bold">室芸設束</h3>
            <ul className="flex flex-col gap-y-6 leading-9">
              <NavLink className="font-bold" to={"/edit-profile"}>
                ドーつ室芸設束ごイぐ
              </NavLink>
              <NavLink className="font-bold" to={"/edit-profile"}>
                ドーつ室芸設束ごイぐ
              </NavLink>
              <NavLink className="font-bold" to={"/edit-profile"}>
                ドーつ室芸設束ごイぐ
              </NavLink>
              <NavLink className="font-bold" to={"/edit-profile"}>
                ドーつ室芸設束ごイぐ
              </NavLink>
            </ul>
          </div>
        </li>
        <li className="mb-5 border-2 bg-color3 p-3">
          <h3 className="mb-2 text-2xl font-bold">設束</h3>
          <ButtonCommon
            type="button"
            className="w-full rounded-lg border-2 bg-color2 text-2xl font-bold"
          >
            室芸設束ごイ
          </ButtonCommon>
        </li>
        <li className="mb-5 border-2 bg-color3">
          <h3 className="mb-2 pl-3 pt-3 text-2xl font-bold">設束</h3>
          <hr className="border-gray-700" />
          <ul className="flex flex-col gap-y-5 p-3">
            <li className="border-b-2 border-dashed pb-3">
              {" "}
              室芸設束ごイ 室芸設束ごイイイ束
            </li>
            <li className="border-b-2 border-dashed pb-3">
              {" "}
              室芸設束ごイ 室芸設束ごイごイイイ束
            </li>
            <li className="border-b-2 border-dashed pb-3">
              {" "}
              室芸設束ごイ 室芸設束ごイごイイイ束
            </li>
          </ul>
        </li>
        <li className="mb-5 border-2 bg-color3">
          <h3 className="mb-2 pl-3 pt-3 text-2xl font-bold">
            設束設束設束設束
          </h3>
          <hr className="border-gray-700" />
          <ul className="flex flex-col gap-y-5 p-3">
            <li className="border-b-2 border-dashed pb-3">
              <div className="mb-2 flex justify-between">
                <span>2023-11-30</span>
                <span className="rounded-lg bg-color5 px-4 text-white">
                  室芸設束
                </span>
              </div>
              室芸設束ごイ 室芸設束ご束ご!
            </li>
            <li className="border-b-2 border-dashed pb-3">
              <div className="mb-2 flex justify-between">
                <span>2023-11-30</span>
                <span className="rounded-lg bg-color11 px-4 text-white">
                  室芸設束
                </span>
              </div>
              室芸設束ごイ 室芸設束ご束ご!
            </li>
          </ul>
        </li>

        <li className="mb-5 border-2 bg-color3">
          <h3 className="mb-2 pl-3 pt-3 text-2xl font-bold">設束</h3>
          <hr className="border-gray-700" />
          <ul className="flex flex-col gap-y-5 p-3">
            <li className="border-b-2 border-dashed pb-3">
              {" "}
              室芸設束ごイ 室芸設束ごイイイ束
            </li>
            <li className="border-b-2 border-dashed pb-3">
              {" "}
              室芸設束ごイ 室芸設束ごイごイイイ束
            </li>
            <li className="border-b-2 border-dashed pb-3">
              {" "}
              室芸設束ごイ 室芸設束ごイごイイイ束
            </li>
          </ul>
        </li>
        <li className="mb-5 border-2 bg-color3">
          <h3 className="mb-2 pl-3 pt-3 text-2xl font-bold">設束</h3>
          <hr className="border-gray-700" />
          <ul className="flex flex-col gap-y-5 p-3">
            <li className="border-b-2 border-dashed pb-3">
              {" "}
              室芸設束ごイ 室芸設束ごイイイ束
            </li>
            <li className="border-b-2 border-dashed pb-3">
              {" "}
              室芸設束ごイ 室芸設束ごイごイイイ束
            </li>
            <li className="border-b-2 border-dashed pb-3">
              {" "}
              室芸設束ごイ 室芸設束ごイごイイイ束
            </li>
          </ul>
        </li>
        <li className="">
          <Advertisement className="flex-col" advertisement={arrAds}></Advertisement>
        </li>
      </ul>
    </div>
  );
}
