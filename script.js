const colorInput = document.getElementById("colorInput");
const colorDisplay = document.getElementById("colorDisplay");
const selectedColorText = document.getElementById("selectedColorText");

colorInput.addEventListener("input", () => {
  const selectedColor = colorInput.value;
  const luminance = calculateLuminance(selectedColor);

  colorDisplay.style.backgroundColor = selectedColor;

  selectedColorText.textContent = `Selected Color: ${selectedColor}`;

  selectedColorText.style.color = luminance < 0.5 ? "#ffffff" : "#000000";
});

function calculateLuminance(color) {
    const r = parseInt(color.slice(1, 3), 16) / 255;
    const g = parseInt(color.slice(3, 5), 16) / 255;
    const b = parseInt(color.slice(5, 7), 16) / 255;
    const redWeight = 0.2126;
    const greenWeight = 0.7152;
    const blueWeight = 0.0722;

    const a = [r, g, b].map((value) =>
        value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4)
    );

    return redWeight * a[0] + greenWeight * a[1] + blueWeight * a[2];
}