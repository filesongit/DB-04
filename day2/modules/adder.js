function adder(num1, num2){
    return num1 + num2;
};
function multiplier(num1, num2){
    return num1 * num2;
};

// alias or a named export
// export { adder as myadd  };


// export { adder, multiplier }
export default multiplier;