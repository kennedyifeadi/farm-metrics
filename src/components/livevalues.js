// Replace with your actual Blynk Auth Token
const AUTH_TOKEN = "M7MEUsmZrZPOVZgzDO-T7yGsogSe4Key";

// Blynk API URLs
const BLYNK_STATUS_URL = `https://ny3.blynk.cloud/external/api/isHardwareConnected?token=${AUTH_TOKEN}`;

// Fetch data from a virtual pin
async function fetchBlynkData(pin) {
  try {
    const response = await fetch(`https://ny3.blynk.cloud/external/api/get?token=${AUTH_TOKEN}&V${pin}`);
    if (!response.ok) {
      throw new Error(`Error fetching data for V${pin}: ${response.statusText}`);
    }
    const data = await response.text(); // API returns value as plain text
    return data;
  } catch (error) {
    console.error(error);
    return "Offline";  // Return "Offline" if there is an error
  }
}

// Check hardware connection status
async function fetchConnectionStatus() {
  try {
    const response = await fetch(BLYNK_STATUS_URL);
    if (!response.ok) {
      throw new Error(`Error checking connection status: ${response.statusText}`);
    }
    const isConnected = await response.json();
    return isConnected; // API returns true/false
  } catch (error) {
    console.error(error);
    return false; // Default to false if error occurs
  }
}

// Update the dashboard with real-time data


// Refresh data every 5 seconds

export const turbidityvalue = ()=>{
  async function updateDashboard() {
    const connectionStatus = await fetchConnectionStatus();
    const statusElement = document.getElementById("connectivityval");
  
    if (connectionStatus) {
      statusElement.textContent = "Connected";
  
      // Fetch data from pins when connected
      const turbidity = await fetchBlynkData("0"); // For V0
      const tds = await fetchBlynkData("2"); // For V2
  
      // Update HTML content for sensor data
   
    } else {
      statusElement.textContent = "Disconnected";
      statusElement.classList.remove("connected");
      statusElement.classList.add("disconnected");
  
      // Show "Offline" if disconnected
      document.getElementById("turbidityval").textContent = "Offline";
      document.getElementById("tempval").textContent = "Offline";
      document.getElementById("tdsval").textContent = "Offline";
    }
  }

  setInterval(updateDashboard, 1000);

// Initial load
updateDashboard();
      return  turbidity
}

export const TDSvalue = ()=>{
  return  tds
}