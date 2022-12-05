import React,{useState, useEffect,}from 'react'

// import axios from "axios";
import { Pie, Doughnut, Bar, Line } from 'react-chartjs-2';
import { ResponsivePie } from '@nivo/pie'
import { ResponsiveBar } from '@nivo/bar'

function Chart() {
const data =  [
  {
    "id": "scala",
    "label": "scala",
    "value": 110,
    "color": "hsl(155, 70%, 50%)"
  },
  {
    "id": "php",
    "label": "php",
    "value": 112,
    "color": "hsl(296, 70%, 50%)"
  },
  {
    "id": "stylus",
    "label": "stylus",
    "value": 459,
    "color": "hsl(110, 70%, 50%)"
  },
  {
    "id": "erlang",
    "label": "erlang",
    "value": 195,
    "color": "hsl(348, 70%, 50%)"
  },
  {
    "id": "hack",
    "label": "hack",
    "value": 558,
    "color": "hsl(130, 70%, 50%)"
  }
]
const data1 = [
  {
    "country": "AD",
    "hot dog": 21,
    "hot dogColor": "hsl(108, 70%, 50%)",
    "burger": 33,
    "burgerColor": "hsl(356, 70%, 50%)",
    "sandwich": 125,
    "sandwichColor": "hsl(92, 70%, 50%)",
    "kebab": 41,
    "kebabColor": "hsl(180, 70%, 50%)",
    "fries": 0,
    "friesColor": "hsl(91, 70%, 50%)",
    "donut": 105,
    "donutColor": "hsl(215, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 9,
    "hot dogColor": "hsl(179, 70%, 50%)",
    "burger": 158,
    "burgerColor": "hsl(0, 70%, 50%)",
    "sandwich": 56,
    "sandwichColor": "hsl(353, 70%, 50%)",
    "kebab": 46,
    "kebabColor": "hsl(68, 70%, 50%)",
    "fries": 150,
    "friesColor": "hsl(15, 70%, 50%)",
    "donut": 1,
    "donutColor": "hsl(108, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 185,
    "hot dogColor": "hsl(206, 70%, 50%)",
    "burger": 74,
    "burgerColor": "hsl(209, 70%, 50%)",
    "sandwich": 183,
    "sandwichColor": "hsl(101, 70%, 50%)",
    "kebab": 54,
    "kebabColor": "hsl(328, 70%, 50%)",
    "fries": 41,
    "friesColor": "hsl(64, 70%, 50%)",
    "donut": 74,
    "donutColor": "hsl(184, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 16,
    "hot dogColor": "hsl(139, 70%, 50%)",
    "burger": 160,
    "burgerColor": "hsl(326, 70%, 50%)",
    "sandwich": 136,
    "sandwichColor": "hsl(161, 70%, 50%)",
    "kebab": 118,
    "kebabColor": "hsl(56, 70%, 50%)",
    "fries": 115,
    "friesColor": "hsl(191, 70%, 50%)",
    "donut": 199,
    "donutColor": "hsl(269, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 116,
    "hot dogColor": "hsl(122, 70%, 50%)",
    "burger": 7,
    "burgerColor": "hsl(22, 70%, 50%)",
    "sandwich": 119,
    "sandwichColor": "hsl(303, 70%, 50%)",
    "kebab": 134,
    "kebabColor": "hsl(316, 70%, 50%)",
    "fries": 7,
    "friesColor": "hsl(234, 70%, 50%)",
    "donut": 38,
    "donutColor": "hsl(319, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 160,
    "hot dogColor": "hsl(129, 70%, 50%)",
    "burger": 186,
    "burgerColor": "hsl(50, 70%, 50%)",
    "sandwich": 92,
    "sandwichColor": "hsl(155, 70%, 50%)",
    "kebab": 7,
    "kebabColor": "hsl(58, 70%, 50%)",
    "fries": 57,
    "friesColor": "hsl(76, 70%, 50%)",
    "donut": 176,
    "donutColor": "hsl(119, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 187,
    "hot dogColor": "hsl(46, 70%, 50%)",
    "burger": 82,
    "burgerColor": "hsl(187, 70%, 50%)",
    "sandwich": 70,
    "sandwichColor": "hsl(107, 70%, 50%)",
    "kebab": 28,
    "kebabColor": "hsl(284, 70%, 50%)",
    "fries": 70,
    "friesColor": "hsl(344, 70%, 50%)",
    "donut": 91,
    "donutColor": "hsl(12, 70%, 50%)"
  }
]
// const [chartData, setChartData] = useState({});
// const [employeeSalary, setEmployeeSalary] = useState([]);
// const [employeeAge, setEmployeeAge] = useState([]);

return (
          <>

          <div style={{ width:'100%', height: '500px'}} className="flex">

                <div style={{ width:'50%', height: '500px'}}>
                 <ResponsivePie
                data={data}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
                />
                </div>
                <div style={{ width:'50%', height: '500px'}}>
                 <ResponsiveBar
                      data={data1}
                      keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
                      indexBy="country"
                      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                      padding={0.3}
                      valueScale={{ type: 'linear' }}
                      indexScale={{ type: 'band', round: true }}
                      valueFormat={{ format: '', enabled: false }}
                      colors={{ scheme: 'nivo' }}
                      defs={[
                          {
                              id: 'dots',
                              type: 'patternDots',
                              background: 'inherit',
                              color: '#38bcb2',
                              size: 4,
                              padding: 1,
                              stagger: true
                          },
                          {
                              id: 'lines',
                              type: 'patternLines',
                              background: 'inherit',
                              color: '#eed312',
                              rotation: -45,
                              lineWidth: 6,
                              spacing: 10
                          }
                      ]}
                      fill={[
                          {
                              match: {
                                  id: 'fries'
                              },
                              id: 'dots'
                          },
                          {
                              match: {
                                  id: 'sandwich'
                              },
                              id: 'lines'
                          }
                      ]}
                      borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                      axisTop={null}
                      axisRight={null}
                      axisBottom={{
                          tickSize: 5,
                          tickPadding: 5,
                          tickRotation: 0,
                          legend: 'country',
                          legendPosition: 'middle',
                          legendOffset: 32
                      }}
                      axisLeft={{
                          tickSize: 5,
                          tickPadding: 5,
                          tickRotation: 0,
                          legend: 'food',
                          legendPosition: 'middle',
                          legendOffset: -40
                      }}
                      labelSkipWidth={12}
                      labelSkipHeight={12}
                      labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                      legends={[
                          {
                              dataFrom: 'keys',
                              anchor: 'bottom-right',
                              direction: 'column',
                              justify: false,
                              translateX: 120,
                              translateY: 0,
                              itemsSpacing: 2,
                              itemWidth: 100,
                              itemHeight: 20,
                              itemDirection: 'left-to-right',
                              itemOpacity: 0.85,
                              symbolSize: 20,
                              effects: [
                                  {
                                      on: 'hover',
                                      style: {
                                          itemOpacity: 1
                                      }
                                  }
                              ]
                          }
                      ]}/>
                 </div>
           </div>
 </>
    )
}

export default Chart
