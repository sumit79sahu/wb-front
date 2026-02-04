const Labeler = ({title, required}:{title:string,required:boolean}) => {
  return (
    <h6 className="">
      {title} <span className="text-gray-400">{required?"(required)":""}</span>
    </h6>
  );
};

export default Labeler;
