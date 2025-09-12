import moment from "moment";

export default function ChatMessage({ item }) {
  if (item.sender === "me") {
    return (
      <div className="flex flex-col gap-2 justify-start animate__animated animate__fadeIn">
        <div className="bg-gradient-to-r from-rose-400 to-rose-600 text-white font-medium px-4 py-4 rounded-2xl shadow-md w-9/12">
          {item.message}
          <div className="flex justify-end text-xs mt-2 text-gray-200 font-semibold">
            <label>{moment(item.createdAt).format("hh:mm A, MMMM Do YYYY")}</label>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 items-end mt-4 animate__animated animate__fadeIn">
      <div className="bg-gradient-to-r from-green-400 to-emerald-600 text-white font-medium px-4 py-4 rounded-2xl shadow-md w-9/12">
        {item.message}
        <div className="flex justify-end text-xs mt-2 text-gray-200 font-semibold">
          <label>{moment(item.createdAt).format("hh:mm A, MMMM Do YYYY")}</label>
        </div>
      </div>
    </div>
  );
}
