import { FilePenLine, Trash2, UserRound } from "lucide-react";
import React from "react";
import Button from "./Button";

const CardComponent = ({
  img,
  name,
  snapshotInfo,
  placeholder,
  rows,
  cols,
  className,
  tagPosition,
  details,
}) => {
  return (
    <>
      <div className="flex items-center gap-5">
        {details?.purpose && (
          <img
            class="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={
              img
                ? img
                : `https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg&ga=GA1.1.2019050042.1706758523&semt=sph`
            }
            alt="Avatar"
          />
        )}
        <div className="w-full text-justify">
          {snapshotInfo ? (
            <>
              <p className="font-bold text-lg py-2">{name}</p>
              <textarea
                value={
                  snapshotInfo.length > 250
                    ? `${snapshotInfo.slice(0, 250)}...`
                    : snapshotInfo
                }
                placeholder={placeholder}
                rows={rows ?? 5}
                cols={cols ?? 8}
                className="resize-none text-justify border rounded-md p-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                disabled
              />
            </>
          ) : details ? (
            <>
              <div className={`${className} flex flex-col my-2 h-[200px]`}>
                <div className={`flex justify-center my-2 h-full relative`}>
                  <div className="flex  w-full gap-y-5 flex-col ">
                    <div className="flex w-full  gap-4">
                      <p className="flex justify-start font-bold w-[30%]">
                        Patient
                      </p>
                      <p
                        className={
                          details.status
                            ? `flex w-full justify-end `
                            : `flex w-full justify-start ml-[15%] `
                        }
                      >
                        {details.name}
                      </p>
                    </div>
                    <div className="flex  w-full gap-4">
                      <p className="flex justify-start font-bold w-[30%]">
                        Time
                      </p>
                      <p
                        className={
                          details.status
                            ? `flex w-full justify-end `
                            : `flex w-full justify-start ml-[15%] `
                        }
                      >
                        {details.time}
                      </p>
                    </div>
                    {details.purpose && (
                      <div className="flex  w-full gap-4">
                        <p className="flex justify-start font-bold w-[30%]">
                          Purpose
                        </p>
                        <p
                          className={
                            details.status
                              ? `flex w-full justify-end `
                              : `flex w-full justify-start ml-[15%] `
                          }
                        >
                          {details.purpose}
                        </p>
                      </div>
                    )}
                    {details.status && (
                      <div className="flex  w-full gap-4">
                        <p className="flex justify-start  font-bold w-[30%]">
                          Status
                        </p>
                        <p
                          className={
                            details.status
                              ? `flex w-full justify-end `
                              : `flex w-full justify-start `
                          }
                        >
                          {details.status}
                        </p>
                      </div>
                    )}
                  </div>
                  {details?.status && (
                    <div className="w-full flex justify-center">
                      <img
                        className="w-24 h-24 mb-3 rounded-full shadow-lg"
                        src={
                          img
                            ? img
                            : `https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg&ga=GA1.1.2019050042.1706758523&semt=sph`
                        }
                        alt="Avatar"
                      />
                    </div>
                  )}
                  <div className={`absolute ${tagPosition}`}>
                    <Button
                      onClick={() => {}}
                      title={details.tag}
                      className={
                        "rounded-xl border-0 border-transparent text-white bg-green-600 text-sm px-5 py-1 h-fit"
                      }
                    />
                  </div>
                </div>
                {details?.purpose ? (
                  <div className="flex gap-2 relative justify-between items-center ">
                    <hr className="h-[2px] top-0 absolute w-full " />
                    <div className="flex my-2 items-center gap-2">
                      <div
                        onClick={() => {}}
                        className="cursor-pointer rounded-lg border border-gray-400 p-1"
                      >
                        <Trash2 color="#d61f1f" />
                      </div>
                      <div
                        onClick={() => {}}
                        className="cursor-pointer rounded-lg border border-gray-400 p-1"
                      >
                        <UserRound color="#341fd6" />
                      </div>
                      <div
                        onClick={() => {}}
                        className="cursor-pointer rounded-lg border border-gray-400 p-1"
                      >
                        <FilePenLine color="#341fd6" />
                      </div>
                    </div>
                    <div>
                      <Button
                        onClick={() => {}}
                        title={"Begin Appointment"}
                        className={"rounded-md text-white bg-blue-700"}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-2 w-[50%] relative justify-center items-center my-2">
                    <div>
                      <Button
                        onClick={() => {}}
                        title={"Double Book"}
                        className={"rounded-sm px-11"}
                      />
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CardComponent;
