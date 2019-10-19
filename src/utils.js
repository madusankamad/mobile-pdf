export const str2bytes = (str) =>{
    var bytes = new Uint8Array(str.length);
    for (var i=0; i<str.length; i++) {
        bytes[i] = str.charCodeAt(i);
    }
    return bytes;
}

export const getBlobData = (bufferData,type='application/zip')=>{

   return new Blob([str2bytes(bufferData)], {type});
}