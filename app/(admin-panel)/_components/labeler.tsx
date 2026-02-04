const Labeler = ({title, required}:{title:string,required:boolean}) => {
  return (
    <h6 className="text-sm font-medium text-[#00033d]">
      {title} {required && <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>}
    </h6>
  );
};

export default Labeler;
