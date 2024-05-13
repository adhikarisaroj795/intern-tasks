function changeContent(index) {
  var paragraphs = {
    1: "Paragraph for Flex Item 1.",
    2: "Paragraph for Flex Item 2.",
    3: "Paragraph for Flex Item 3.",
    4: "Paragraph for Flex Item 4.",
    5: "Paragraph for Flex Item 5.",
  };

  var content = document.getElementById("content");
  content.textContent = paragraphs[index];
}
