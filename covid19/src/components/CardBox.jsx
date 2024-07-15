const CardBox = ({ data }) => {
  return (
    <div className="flex flex-row w-72 max-w-md h-28 gap-2.5">
      <img src={data.icon} alt="" />
      <div>
        <p className="block card-title">{data.title}</p>
        <p className="block card-description">{data.description}</p>

        {data.additionalData && (
          <div className="flex flex-row items-center">
            <img src={data.additionalData.icon} alt="" />
            <p className="block">{data.additionalData.rate}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardBox;
