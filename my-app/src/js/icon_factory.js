export class IconFactory {
  static spritePath = '../assets/icon/icon.svg'; // Đường dẫn file sprite

  /**
   * Tạo một thẻ SVG chứa biểu tượng đã định nghĩa trong icons.svg
   * @param {string} id - id của biểu tượng (VD: icon-plus)
   * @param {object} options - thuộc tính SVG như { width, height, stroke, fill }
   * @returns {SVGElement}
   */
  static createIcon(id, options = {}) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    // Gán các thuộc tính mặc định
    svg.setAttribute("width", options.width || "24");
    svg.setAttribute("height", options.height || "24");
    svg.setAttribute("stroke", options.stroke || "currentColor");
    svg.setAttribute("fill", options.fill || "none");
    svg.setAttribute("stroke-width", options.strokeWidth || "1.5");

    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttributeNS("http://www.w3.org/1999/xlink", "href", `${this.spritePath}#${id}`);
    svg.appendChild(use);

    return svg;
  }
}