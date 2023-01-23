import { SERVER_URL } from "config";
import { BiDislike, BiLike } from "react-icons/bi";
const Comment = ({ user, time, message }) => {
  const timeParser = (date) => {
    const d = 24 * 60 * 60;
    const h = 60 * 60;
    const m = 60;
    const passed = (-(Date.parse(date) - Date.now()) / 1000).toFixed(0);
    const days = (passed / d).toFixed();
    const hours = ((passed % d) / h).toFixed();
    const mins = ((passed % h) / m).toFixed();
    return { days, hours, mins };
  };
  console.log(timeParser(time));
  const { days, hours, mins } = timeParser(time);
  let timePassed = "";
  if (days > 0) {
    timePassed = `${days} روز گذشته`;
  } else if (hours > 0) {
    timePassed = `${hours} ساعت گذشته`;
  } else if (mins > 0) {
    timePassed = `${mins} دقیقه گذشته`;
  } else {
    timePassed = "همین الان";
  }

  return (
    <div className=" py-4 border-b border-gray-200 flex last:border-none">
      <div className="w-14">
        <img
          className="rounded-full overflow-hidden aspect-square w-12 h-12"
          src={`${SERVER_URL}/img/users/${user.profilePic}`}
          alt={user.fullname}
        />
      </div>
      <div className="w-0 flex-1">
        <div className="flex gap-1 items-center">
          <p className="font-bold">{user.fullName}</p>
          <p className="text-xs text-gray-500">- {timePassed}</p>
        </div>
        <p className="text-sm font-light">{message}</p>
        <div className="py-1 flex text-gray-500 gap-2 text-sm">
          <button className="text-xs" type="button">پاسخ دادن</button>
          <button type="button">
            <BiLike />
          </button>
          <button type="button">
            <BiDislike />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
