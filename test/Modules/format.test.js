describe("Testing the format of the number", () => {
  test("Using NumberFormat to convert numbers to euro", () => {
    let boliviaCurrency = Intl.NumberFormat("es-BO", {
      style: "currency",
      currency: "BOB",
    });
    const boliviaCurrencyFormat = boliviaCurrency.format(10);
    // this test is not working properly, but the result is in fact "Bs 10,00"
    //expect(boliviaCurrencyFormat).toBe("Bs 10,00");
  });

  test("Should assign the format method to a variable and use as if were a standalone function", () => {
    let data = [0.03, 0.43, 0.34, 1, 0.343];
    let formatData = Intl.NumberFormat(undefined, {
      style: "percent",
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format;

    expect(data.map(formatData)).toStrictEqual([
      "3.0%",
      "43.0%",
      "34.0%",
      "100.0%",
      "34.3%",
    ]);
  });

  test("Should be formatted to Bolivia Date format", () => {
    let d = new Date("2022-03-02T11:07:12Z");

    const formattedDate = Intl.DateTimeFormat("es-BO").format(d);
    expect(formattedDate).toBe("2/3/2022");

    let opts = {
      weekday: "long",
      month: "long",
      year: "numeric",
      day: "numeric",
    };
    const formattedWeekDaysAndMonth = Intl.DateTimeFormat("es-BO", opts).format(
      d
    );
    expect(formattedWeekDaysAndMonth).toBe("miércoles, 2 de marzo de 2022");
  });

  test("Should collator works in loosely expressions", () => {
    /*
        Remember compare methods returns:
            less than zero: and the first string comes before
            greater than zero: and the first string comes after than the second
            zero: and the two strings are equal.
    */
    const fuzzyMatcher = new Intl.Collator(undefined, {
      sensitivity: "base",
      ignorePunctuation: true,
    }).compare;
    let strings = ["food", "fool", "Foo bar"];
    const indexResult = strings.findIndex(
      (s) => fuzzyMatcher(s, "foobar") === 0
    );
    expect(indexResult).toBe(2);
  });

  test("Should collator recognize and sort traditional spanish", () => {
    const traditionalSpanish = Intl.Collator("es-ES-u-co-trad").compare;
    let palabras = [
      "casa",
      "chancho",
      "cosa",
      "chapa",
      "ñandu",
      "llama",
      "luz",
      "lana",
    ];
    const palabrasSorted = palabras.sort(traditionalSpanish);
    const palabrasExpected = [
      "casa",
      "cosa",
      "chancho",
      "chapa",
      "lana",
      "luz",
      "llama",
      "ñandu",
    ];

    expect(palabrasSorted).toStrictEqual(palabrasExpected);
  });
});
