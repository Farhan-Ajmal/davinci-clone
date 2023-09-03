const CopyRight = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <p className="text-sm text-center">&copy; {currentYear} DaVinci</p>
    </div>
  );
};

export default CopyRight;
