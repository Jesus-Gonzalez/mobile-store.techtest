import * as API from "./detail";

describe("app.api.detail", () => {
  it("should request item details", () => {
    global.fetch = jest.fn().mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolve({
            json: () => new Promise((resolve) => resolve({ id: "0001" })),
          });
        })
    );
    API.fetchItem("0001");
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
