const ProductPrice = ({ price }: { price: number }) => {
  const fixedValue = price.toFixed(2);
  const [intValue, decimalValue] = fixedValue.split(".");
  return (
    <div className="flex items-center">
      <sup>$</sup>
      <span className="text-[18px] font-medium">{intValue}</span>
      <sup className="text-[13px]">{decimalValue}</sup>
    </div>
  );
};

export default ProductPrice;
