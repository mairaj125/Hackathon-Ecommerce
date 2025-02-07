
export default function TopBar() {
  return (
    <div className="bg-black text-white text-sm py-2 px-4 flex justify-between items-center min-h-[50px]">
      <div className="ml-[30%]">
        <span>
          Summer Sale For All Swim Suits And Free Express Delivery -{" "}
          <span className="font-bold">OFF 50%</span>!
        </span>
        <a href="#" className="ml-2 text-white-500 underline font-bold">
          ShopNow
        </a>
      </div>
      <div className="mr-60">
        <button className="flex items-center">
          English <span className="ml-1">&#x25BC;</span>
        </button>
      </div>
    </div>
  );
}
