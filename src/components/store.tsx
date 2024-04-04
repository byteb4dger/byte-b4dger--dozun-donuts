import StoreItems from "../data/items.json";
import StoreItem from "./storeItem";

const Store = () => {
  return (
    <main>
      <div className="mt-10 flex flex-col items-center justify-center lg:ml-10 lg:flex-row lg:gap-10">
        {StoreItems.map((item) => (
          <div className="flex flex-col" key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Store;
