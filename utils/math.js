/*
* utils/math.js
* Holds different conversions for discrete math
* */

// convert float bit-16 to binary
function float16ToBinary(value) {
    let buffer = new ArrayBuffer(2);
    let view = new DataView(buffer);
    view.setFloat16(0, value);
    let int16Value = view.getInt16(0);
    return (int16Value >>> 0).toString(2).padStart(16, '0');
}

// convert binary to float bit-16
function binaryToFloat16(binary) {
    let int16Value = parseInt(binary, 2);
    let buffer = new ArrayBuffer(2);
    let view = new DataView(buffer);
    view.setInt16(0, int16Value);
    return view.getFloat16(0);
}

// convert float bit-32 to binary
function binaryToFloat32(binaryString) {
    let intValue = parseInt(binaryString, 2);
    let buffer = new ArrayBuffer(4);
    let view = new DataView(buffer);
    view.setUint32(0, intValue);
    return view.getFloat32(0, false);
}

// convert binary to float bit-32
function float32ToBinary(decimalNumber) {
    let buffer = new ArrayBuffer(4);
    let view = new DataView(buffer);
    view.setFloat32(0, decimalNumber, false);
    let intValue = view.getUint32(0);
    return intValue.toString(16).toUpperCase();
}

// Testers
let binaryValue = float16ToBinary(-1.75);
console.log(binaryValue);

let floatValue = binaryToFloat16("0100111000011000");
console.log(floatValue);

let binaryString = "42900000";
let decimalNumber = binaryToFloat32(binaryString);
console.log(decimalNumber);

let decimalNumberInput = -0.076171875;
let hexString = float32ToBinary(decimalNumberInput);
console.log(hexString);
