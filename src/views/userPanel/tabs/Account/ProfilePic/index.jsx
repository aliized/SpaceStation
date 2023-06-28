import React, { useContext, useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import toast from "react-hot-toast";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
import { IoClose, IoTrash, IoTrashOutline } from "react-icons/io5";

import ModalContainer from "components/ModalContainer";
import { SERVER_URL } from "config";
import { BlogContext } from "context/BlogContext";
import { updateProfilePicApi } from "services/web/user";

const ProfilePic = () => {
  const { setUser, user, token } = useContext(BlogContext);
  const [imgScale, setImgScale] = useState(1);
  const [newPic, setNewPic] = useState(null);
  const editor = useRef(null);

  const handleSetPic = (e) => {
    const pic = e.target.files[0];
    setImgScale(1);
    setNewPic(pic);
    console.log(pic);
    e.target.value = null;
  };

  const getEditedPic = async () => {
    if (newPic) {
      console.log(newPic);
      const fileDataUrl = await editor.current
        .getImageScaledToCanvas()
        .toDataURL();
      const fetchedFile = await fetch(fileDataUrl);
      const fileData = await fetchedFile.blob();
      let newFile = new File([fileData], newPic.name, {
        type: newPic.type,
      });

      return newFile;
    } else {
      return null;
    }
  };
  const handleChangePic = async () => {
    const uploadingProfilePic = toast.loading("لطفا چند لحظه صبر کنید!");
    try {
      //* making edited profile pic File
      const profilePic = await getEditedPic();

      //* appending profile pic inside a form
      const form = new FormData();
      if (profilePic !== null) {
        form.append("profilePic", profilePic, newPic.name);
      }

      //* sending Data to Api
      console.log(form);
      const res = await updateProfilePicApi(token, form);
      console.log(res);

      if (res.status !== 200) {
        toast.error("مشکلی در تغییر تصویر به وجود آمده!", {
          id: uploadingProfilePic,
          duration: 4000,
        });
      }

      toast.success(` ${user.fullName} جان تغییر عکست با موفقیت انجام شد`, {
        id: uploadingProfilePic,
        duration: 4000,
      });

      //* set new data
      setUser(res.data.user);
      setNewPic(null);
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message, {
          id: uploadingProfilePic,
          duration: 4000,
        });
      } else {
        console.log(err);
        // toast.dismiss(uploadingProfilePic);
      }
    }
  };
  return (
    <div className="flex items-center gap-4 px-2 md:px-8 py-5 bg-gray-800 border-2 border-gray-800 bg-opacity-70 rounded-3xl">
      <div>
        {user.profilePic ? (
          <>
            <img
              className={` overflow-hidden rounded-full aspect-square h-16 w-16 md:w-28 md:h-28`}
              src={`${SERVER_URL}/img/users/${user.profilePic}`}
              alt={user.fullname}
            />
          </>
        ) : (
          <>
            <img
              className="overflow-hidden rounded-full aspect-square h-16 w-16 md:w-28 md:h-28"
              src={`${SERVER_URL}/img/users/defaultPic.webp`}
              alt={user.fullname}
            />
          </>
        )}
      </div>
      <div className="flex flex-1 gap-3 flex-col justify-center text-sm">
        <div className="flex gap-3 ">
          <label htmlFor="newPic">
            <div className="py-1 px-2 text-gray-400 duration-150 border border-gray-400 rounded-md hover:bg-white hover:bg-opacity-10 hover:text-gray-200 hover:border-gray-200 hover:cursor-pointer">
              {user.profilePic ? "تغییر تصویر" : "افزودن تصویر"}
            </div>
          </label>
          <input
            className="hidden"
            type="file"
            name="newPic"
            id="newPic"
            accept=".jpg,.jpeg,.png,.webp"
            // value={newPic.name}
            onChange={(e) => handleSetPic(e)}
          />
          {user.profilePic ? (
            <button
              type="button"
              className="p-1 text-lg text-gray-400 duration-150 border border-gray-400 rounded-md hover:bg-red-600 hover:bg-opacity-40 hover:text-gray-200 hover:border-gray-200 group"
              onClick={() => {
                handleChangePic();
              }}
            >
              <span className="group-hover:hidden">
                <IoTrashOutline />
              </span>
              <span className="hidden group-hover:block">
                <IoTrash />
              </span>
            </button>
          ) : null}
        </div>
        <div className="text-gray-400 font-light">
          {" "}
          لطفا از تصویری با فرمت jpg ، png و یا webp استفاده کنید.
        </div>
      </div>

      {newPic ? (
        <ModalContainer className=" flex flex-col items-center justify-center">
          <div className="w-full text-center relative text-2xl py-3">
            <div className="absolute top-4 right-4 flex justify-start  text-4xl sm:text-3xl">
              <button
                type="button"
                onClick={() => setNewPic(null)}
                className=" text-gray-700 hover:text-red-700"
              >
                <IoClose />
              </button>
            </div>
            {user.profilePic ? "تغییر تصویر" : "افزودن تصویر"}
          </div>
          <div className=" flex flex-col items-center  justify-center flex-1">
            <AvatarEditor
              ref={editor}
              image={newPic}
              backgroundColor={"#fff"}
              borderRadius={1000}
              width={300}
              height={300}
              border={50}
              scale={imgScale}
              onLoadFailure={() => {
                console.log("pic load failed");
              }}
            />
          </div>
          <div className=" px-4 w-full flex h-12 items-center justify-between gap-8">
            <div className="flex gap-1">
              <button
                className="bg-blue-600 py-2 px-3 rounded-lg text-sm text-white hover:bg-blue-500 duration-150"
                type="button"
                onClick={handleChangePic}
              >
                ذخیره
              </button>
              <button
                className="bg-gray-400 hover:bg-gray-500 duration-150 py-2 px-3 rounded-lg text-sm text-white"
                type="button"
                onClick={() => setNewPic(null)}
              >
                {" "}
                لغو
              </button>
            </div>
            <div className="text-gray-500 flex items-center text-2xl gap-2 flex-1">
              <AiOutlineZoomIn />
              <input
                dir="ltr"
                type="range"
                min={1}
                max={5}
                step={0.05}
                value={imgScale}
                onChange={(e) => {
                  setImgScale(e.target.value);
                }}
                className="flex-1 h-[2px] appearance-none cursor-pointer bg-gray-500 "
              />
              <AiOutlineZoomOut />
            </div>
          </div>
        </ModalContainer>
      ) : null}
    </div>
  );
};

export default ProfilePic;
