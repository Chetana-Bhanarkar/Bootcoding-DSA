// Input: s = "the sky is blue"
// Output: "blue is sky the"

const string = (s) => {
    let text = s.trim();
    text = text.replaceAll("  "," ")
    text = text.split(" ");
    text = text.reverse();
    text = text.join(" ");
    return text
};


console.log(string("             the sky       is blue      "));