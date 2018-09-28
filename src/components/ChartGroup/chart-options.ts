const animationEnabled = true;
const theme = "dark1";

export const charts = [
  {
    animationEnabled,
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        dataPoints: [
          { label: "apple", y: 10 },
          { label: "orange", y: 15 },
          { label: "banana", y: 25 },
          { label: "mango", y: 30 },
          { label: "grape", y: 28 }
        ],
        type: "column"
      }
    ],
    theme,
    title: {
      text: "Column CanvasJS"
    }
  },
  {
    animationEnabled,
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        dataPoints: [
          { label: "apple", y: 10 },
          { label: "orange", y: 15 },
          { label: "banana", y: 25 },
          { label: "mango", y: 30 },
          { label: "grape", y: 28 }
        ],
        type: "pie"
      }
    ],
    theme,
    title: {
      text: "Pie CanvasJS"
    }
  },
  {
    animationEnabled,
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        dataPoints: [
          { label: "apple", y: 10 },
          { label: "orange", y: 15 },
          { label: "banana", y: 25 },
          { label: "mango", y: 30 },
          { label: "grape", y: 28 }
        ],
        type: "pyramid"
      }
    ],
    theme,
    title: {
      text: "Pyramid CanvasJS"
    }
  },
  {
    animationEnabled,
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        dataPoints: [
          { label: "apple", y: 10 },
          { label: "orange", y: 15 },
          { label: "banana", y: 25 },
          { label: "mango", y: 30 },
          { label: "grape", y: 28 }
        ],
        type: "doughnut"
      }
    ],
    theme,
    title: {
      text: "Doughnut CanvasJS"
    }
  },
  {
    animationEnabled,
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        dataPoints: [
          { label: "apple", y: 10 },
          { label: "orange", y: 15 },
          { label: "banana", y: 25 },
          { label: "mango", y: 30 },
          { label: "grape", y: 28 }
        ],
        type: "line"
      }
    ],
    theme: "light2",
    title: {
      text: "Line CanvasJS"
    }
  },
  {
    animationEnabled,
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        dataPoints: [
          { label: "apple", y: 10 },
          { label: "orange", y: 15 },
          { label: "banana", y: 25 },
          { label: "mango", y: 30 },
          { label: "grape", y: 28 }
        ],
        type: "bar"
      }
    ],
    theme,
    title: {
      text: "Bar CanvasJS"
    }
  }
];
