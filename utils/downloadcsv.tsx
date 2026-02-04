const downloadCSV = (csv: Blob, filename: string): void => {
//   const csvFile = new Blob([csv], { type: "text/csv" });
  const downloadLink = document.createElement("a");

  downloadLink.download = filename;
  downloadLink.href = window.URL.createObjectURL(csv);
  downloadLink.style.display = "none";

  document.body.appendChild(downloadLink);
  downloadLink.click();

  document.body.removeChild(downloadLink);
  window.URL.revokeObjectURL(downloadLink.href);
};

export default downloadCSV;
