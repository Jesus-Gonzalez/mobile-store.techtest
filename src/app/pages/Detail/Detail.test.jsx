import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store, LOADED_DETAIL } from "core/store";

import Detail from "./index";

const productMock = {
  id: "8hKbH2UHPM_944nRHYN1n",
  brand: "Acer",
  model: "Liquid Z6",
  price: "120",
  imgUrl:
    "https://front-test-api.herokuapp.com/images/8hKbH2UHPM_944nRHYN1n.jpg",
  networkTechnology: "GSM / HSPA / LTE",
  networkSpeed: "HSPA  LTE",
  gprs: "Yes",
  edge: "Yes",
  announced: "2016  August",
  status: "Available. Released 2016  December",
  dimentions: "-",
  weight: "",
  sim: ["Single SIM (Micro-SIM) or Dual SIM (Micro-SIM", "dual stand-by)"],
  displayType: "IPS LCD capacitive touchscreen  16M colors",
  displayResolution: "5.0 inches",
  displaySize: "720 x 1280 pixels (~294 ppi pixel density)",
  os: "Android 6.0 (Marshmallow)",
  cpu: "Quad-core 1.25 GHz Cortex-A53",
  chipset: "Mediatek MT6737",
  gpu: "Mali-T720MP2",
  externalMemory: "microSD  up to 256 GB",
  internalMemory: ["8 GB"],
  ram: "1 GB RAM",
  primaryCamera: ["8 MP", "autofocus", "LED flash"],
  secondaryCmera: "2 MP",
  speaker: "Yes",
  audioJack: "Yes",
  wlan: "Yes",
  bluetooth: "Yes",
  gps: "Yes with A-GPS",
  nfc: "",
  radio: "FM radio",
  usb: "microUSB 2.0",
  sensors: ["Accelerometer", "proximity"],
  battery: "Removable Li-Ion 2000 mAh battery",
  colors: ["Black", "White"],
  options: {
    colors: [
      { code: 1000, name: "Black" },
      { code: 1001, name: "White" },
    ],
    storages: [{ code: 2000, name: "8 GB" }],
  },
};

describe("app.pages.Detail", () => {
  let component;

  beforeEach(() => {
    component = (
      <Provider store={store}>
        <BrowserRouter>
          <Detail />
        </BrowserRouter>
      </Provider>
    );
  });

  it("should render image", async () => {
    render(component);
    store.dispatch({ type: LOADED_DETAIL, payload: productMock });
    await waitForElementToBeRemoved(() => screen.getByText(/Loading.*/i));
    expect(screen.getByAltText(/device image.*/i)).toBeInTheDocument();
  });
});
