const CardBox = ({ data }) => {
  return (
    <div className="flex flex-row w-[17.5rem] max-w-md h-28 gap-2.5 mt-2">
      <img src={data.icon} alt="" />
      <div>
        <p className="block card-title">{data.title}</p>
        <p className="block card-description">{data.description}</p>

        {data.additionalData && (
          <div className="flex flex-row items-center">
            <img src={data.additionalData.icon} alt="" />
            <p
              className={`block ${
                data.additionalData.redText ? "red-text" : "green-text"
              }`}
            >
              {data.additionalData.rate}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardBox;
