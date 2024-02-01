export const handlePrint = (html: string) => {
  var printWindow = window.open("XYZ"); //Set Company Name
  printWindow.document.write(`${html}`);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(function () {
    printWindow.print();
  }, 100);
};
