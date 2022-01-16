import { useRecoilState } from "recoil";
import { isError } from "../atom";

const GlobalNotification = () => {
  const [error, setError] = useRecoilState(isError);
  return (
    <div
      className={`fixed bottom-0 right-0 z-10 m-20 ${
        error.status ? "" : "hidden"
      }`}
    >
      <div className="flex items-center text-white w-full bg-red-400 shadow-md rounded-lg overflow-hidden">
        <div className="w-10 border-r px-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            ></path>
          </svg>
        </div>

        <div className="flex-grow items-center px-2 py-3">
          <div className="mx-3">
            <p>{error.message}</p>
          </div>
        </div>

        <button onClick={() => setError({ status: false, message: "" })}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-end mr-4 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GlobalNotification;
