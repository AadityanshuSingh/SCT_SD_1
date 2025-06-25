import { useState } from "react";

export default function TemperatureConverter() {
  const [inputTemp, setInputTemp] = useState("");
  const [scale, setScale] = useState("Celsius");

  const convertTemperature = (temp, fromScale) => {
    let celsius;

    // Convert to Celsius first
    if (fromScale === "Celsius") celsius = temp;
    else if (fromScale === "Fahrenheit") celsius = (temp - 32) * (5 / 9);
    else if (fromScale === "Kelvin") celsius = temp - 273.15;

    // Now convert to all scales
    const fahrenheit = (celsius * 9) / 5 + 32;
    const kelvin = celsius + 273.15;

    return {
      celsius: celsius.toFixed(2),
      fahrenheit: fahrenheit.toFixed(2),
      kelvin: kelvin.toFixed(2),
    };
  };

  const results =
    inputTemp === "" ? null : convertTemperature(parseFloat(inputTemp), scale);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 text-white rounded-2xl shadow-lg space-y-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        Temperature Converter
      </h1>

      <div className="space-y-2">
        <label className="block text-sm">Enter Temperature:</label>
        <input
          type="number"
          className="w-full p-2 rounded bg-gray-700 focus:outline-none"
          value={inputTemp}
          onChange={(e) => setInputTemp(e.target.value)}
          placeholder="Enter value"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm">Select Scale:</label>
        <select
          className="w-full p-2 rounded bg-gray-700 focus:outline-none"
          value={scale}
          onChange={(e) => setScale(e.target.value)}
        >
          <option value="Celsius">Celsius (°C)</option>
          <option value="Fahrenheit">Fahrenheit (°F)</option>
          <option value="Kelvin">Kelvin (K)</option>
        </select>
      </div>

      {results && (
        <div className="mt-4 space-y-2">
          <h2 className="text-lg font-semibold">Converted Temperatures:</h2>
          <p>🌡️ Celsius: {results.celsius} °C</p>
          <p>🌡️ Fahrenheit: {results.fahrenheit} °F</p>
          <p>🌡️ Kelvin: {results.kelvin} K</p>
        </div>
      )}
    </div>
  );
}
