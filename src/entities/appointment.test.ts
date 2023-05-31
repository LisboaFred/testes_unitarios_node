import { expect, test } from "vitest";
import { Appointment } from "./appointment";

test("create an appointment", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  endsAt.setDate(endsAt.getDate() + 2);
  startsAt.setDate(startsAt.getDate() + 1);

  const appointment = new Appointment({
    customer: "Fred Lisboa",
    startsAt,
    endsAt,
  });

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual("Fred Lisboa");
});

test("canoot create an appointment with endDate before startDate", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  startsAt.setDate(startsAt.getDate() + 2);
  endsAt.setDate(endsAt.getDate() + 1);

  expect(() => {
    return new Appointment({
      customer: "Fred Lisboa",
      startsAt,
      endsAt,
    });
  }).toThrow();
});

test("canoot create an appointment with startDate before now", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  startsAt.setDate(startsAt.getDate() - 1);
  endsAt.setDate(endsAt.getDate() - 1);

  expect(() => {
    return new Appointment({
      customer: "Fred Lisboa",
      startsAt,
      endsAt,
    });
  }).toThrow();
});
