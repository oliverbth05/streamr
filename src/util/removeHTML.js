export default function removeHTML(str) {
    var text;
    var tag;

    var split = str.split('<');
  
    text = split[0];

    tag = '<'.concat(split[1]) + '<'.concat(split[2]);
    
    return {
        text, 
        tag: tag.slice(0, tag.length - 1)
    }
}