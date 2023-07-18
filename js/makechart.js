function TemperatureGraphbyEarth(csvdata) {
    const label = csvdata.map(d => d.year);
    const data = csvdata.map(d => d.AverageTemperature);
    const ctx = document.getElementById('temperature_graph_by_earth').getContext('2d');
    const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient1.addColorStop(0, '#ff0000ff');
    gradient1.addColorStop(1, '#ff5555ff');
    const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient2.addColorStop(0, '#ff5555db');
    gradient2.addColorStop(1, '#ff0000db');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: label,
            datasets: [
                {
                    label: 'Surfacer Temperature',
                    data: data,
                    borderColor: gradient1,
                    backgroundColor: gradient2,
                    pointRadius: 0,
                }
            ]
        },
        options: {
            interaction: {
                intersect: false
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            family: 'Pretendard',
                            size: '15vw'
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Surface Temperature Change by Year',
                    font: {
                        family: 'Pretendard',
                        size: '25vw'
                    }
                }
            },
        },
    });
}

function TemperatureGraphbySeoulMonth(csvdata) {
    const label = csvdata.map(d => d.date);
    const data = csvdata.map(d => d.Temperature);
    const ctx = document.getElementById('temperature_graph_by_seoul_month').getContext('2d');
    const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient1.addColorStop(0, '#ff0000ff');
    gradient1.addColorStop(1, '#ff5555ff');
    const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient2.addColorStop(0, '#ff5555db');
    gradient2.addColorStop(1, '#ff0000db');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: label,
            datasets: [
                {
                    label: 'Seoul Temperature',
                    data: data,
                    borderColor: gradient1,
                    backgroundColor: gradient2,
                    pointRadius: 0,
                }
            ]
        },
        options: {
            interaction: {
                intersect: false
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            family: 'Pretendard',
                            size: '15vw'
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Seoul Temperature Change by Month',
                    font: {
                        family: 'Pretendard',
                        size: '25vw'
                    }
                }
            },
        },
    });
}

function TemperatureGraphbySeoulYear(csvdata) {
    const label = csvdata.map(d => d.date);
    const data = csvdata.map(d => d.Temperature);
    const ctx = document.getElementById('temperature_graphy_by_seoul_year').getContext('2d');
    const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient1.addColorStop(0, '#ff0000ff');
    gradient1.addColorStop(1, '#ff5555ff');
    const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient2.addColorStop(0, '#ff5555db');
    gradient2.addColorStop(1, '#ff0000db');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: label,
            datasets: [
                {
                    label: 'Seoul Temperature',
                    data: data,
                    borderColor: gradient1,
                    backgroundColor: gradient2,
                    pointRadius: 0,
                }
            ]
        },
        options: {
            interaction: {
                intersect: false
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            family: 'Pretendard',
                            size: '15vw'
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Seoul Temperature Change by year',
                    font: {
                        family: 'Pretendard',
                        size: '25vw'
                    }
                }
            },
        },
    });
}

function GreenhouseGraphbyMonth(csvdata) {
    const label = Array.from(new Set(csvdata.map(d => d.month)));
    function data(str) {
        const d = csvdata.map(function (d) {
            if (d.category == str) return d.value;
            else return 2e9;
        });
        const a = d.filter(x => x < 2e9);
        const m = Math.max(...a);
        const b = a.map(x => x / m * 100);
        return b;
    }
    const ctx = document.getElementById('greenhousegas_graph_by_month');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: label,
            datasets: [
                {
                    label: 'CO2',
                    data: data('CO2'),
                    borderColor: '#ff5555ff',
                    backgroundColor: '#ff5555db',
                    pointRadius: 0
                },
                {
                    label: 'CH4',
                    data: data('CH4'),
                    borderColor: '#00aa00ff',
                    backgroundColor: '#00aa00db',
                    pointRadius: 0
                },
                {
                    label: 'N2O',
                    data: data('N2O'),
                    borderColor: '#5555ffff',
                    backgroundColor: '#5555ffdb',
                    pointRadius: 0
                },
                {
                    label: 'SF6',
                    data: data('SF6'),
                    borderColor: '#333333ff',
                    backgroundColor: '#333333db',
                    pointRadius: 0
                }
            ]
        },
        options: {
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            family: 'Pretendard',
                            size: '15vw'
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Greenhouse Gas Change by Month',
                    font: {
                        family: 'Pretendard',
                        size: '25vw'
                    }
                }
            },
            scales: {
                y: {
                    stacked: true,
                }
            }
        },
    });
}

// function GreenhouseGraphbyYear(csvdata) {
//     const label = Array.from(new Set(csvdata.map(d => d.year)));
//     function data(str) {
//         const d = csvdata.map(function (d) {
//             if (d.category == str) return d.value;
//             else return 2e9;
//         });
//         const a = d.filter(x => x < 2e9);
//         const m = Math.max(...a);
//         const b = a.map(x => x / m * 100);
//         return b;
//     }
//     const ctx = document.getElementById('greenhousegas_graph_by_year');
//     const chart = new Chart(ctx, {
//         // type: 'bar',
//         type: 'line',
//         data: {
//             labels: label,
//             datasets: [
//                 {
//                     label: 'CO2',
//                     data: data('CO2'),
//                     borderColor: '#ff5555ff',
//                     backgroundColor: '#ff5555db',
//                 },
//                 {
//                     label: 'CH4',
//                     data: data('CH4'),
//                     borderColor: '#55ff55ff',
//                     backgroundColor: '#55ff55db',
//                 },
//                 {
//                     label: 'N2O',
//                     data: data('N2O'),
//                     borderColor: '#5555ffff',
//                     backgroundColor: '#5555ffdb',
//                 },
//                 {
//                     label: 'SF6',
//                     data: data('SF6'),
//                     borderColor: '#555555ff',
//                     backgroundColor: '#555555db',
//                 }
//             ]
//         },
//         options: {
//             interaction: {
//                 mode: 'nearest',
//                 axis: 'x',
//                 intersect: false
//             },
//             responsive: true,
//             plugins: {
//                 legend: {
//                     position: 'top',
//                     labels: {
//                         font: {
//                             family: 'Pretendard',
//                             size: '15vw'
//                         }
//                     }
//                 },
//                 title: {
//                     display: true,
//                     text: 'Greenhouse Gas Change by Year',
//                     font: {
//                         family: 'Pretendard',
//                         size: '25vw'
//                     }
//                 }
//             },
//             scales: {
//                 // x: {
//                 //     stacked: true,
//                 // },
//                 // y: {
//                 //     stacked: true,
//                 // }
//             }
//         },
//     });
// }
function GreenhouseGraphbyYear(csvdata) {
    const label = Array.from(new Set(csvdata.map(d => d.year)));
    function data(str) {
        const d = csvdata.map(function (d) {
            if (d.category == str) return d.value;
            else return 2e9;
        });
        const a = d.filter(x => x < 2e9);
        const m = Math.max(...a);
        const b = a.map(x => x / m * 100);
        return b;
    }
    const ctx = document.getElementById('greenhousegas_graph_by_year');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: label,
            datasets: [
                {
                    label: 'CO2',
                    data: data('CO2'),
                    borderColor: '#ff5555ff',
                    backgroundColor: '#ff5555db',
                },
                {
                    label: 'CH4',
                    data: data('CH4'),
                    borderColor: '#ff8c55ff',
                    backgroundColor: '#ff8c55db',
                },
                {
                    label: 'N2O',
                    data: data('N2O'),
                    borderColor: '#ffff00ff',
                    backgroundColor: '#ffff00db',
                },
                {
                    label: 'HFCs',
                    data: data('HFCs'),
                    borderColor: '#55ff55ff',
                    backgroundColor: '#55ff55db',
                },
                {
                    label: 'PFCs',
                    data: data('PFCs'),
                    borderColor: '#55ffffff',
                    backgroundColor: '#55ffffdb',
                },
                {
                    label: 'SF6',
                    data: data('SF6'),
                    borderColor: '#5555ffff',
                    backgroundColor: '#5555ffdb',
                },
                {
                    label: 'NF3',
                    data: data('NF3'),
                    borderColor: '#4b5582ff',
                    backgroundColor: '#4b5582db',
                },
                {
                    label: 'GHG',
                    data: data('GHG'),
                    borderColor: '#805580ff',
                    backgroundColor: '#805580db',
                }
            ]
        },
        options: {
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            family: 'Pretendard',
                            size: '15vw'
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Greenhouse Gas Change by Year',
                    font: {
                        family: 'Pretendard',
                        size: '25vw'
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                }
            }
        },
    });
}