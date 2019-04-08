// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = "Nunito", '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#858796";

// Pie Chart Example
var ctx = document.getElementById("paymentStatus");
var myPieChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Bezahlt", "Ausstehend", "Mahnung"],
    datasets: [{
      data: [55, 30, 15],
      backgroundColor: ["#1cc88a", "#f6c23e", "#e74a3b"],
      hoverBackgroundColor: ["#0fcb87", "#f2b927", "#ea3b2f"],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: "#dddfeb",
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  },
});
