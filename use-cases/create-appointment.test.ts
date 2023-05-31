import { describe, expect, it } from "vitest";
import { CreateAppointment } from "./create-appointment";
import { Appointment } from "../src/entities/appointment";
import { InMemoryAppointmentsRepository } from "../repositories/in-memory/in-memory-appointment-repository";
import { getFutureDate } from "../tests/utils/get-future-date";

describe("Create Appointment", () => {
  it("should be able to create an appointment", () => {
    const startsAt = getFutureDate("2023-07-01");
    const endsAt = getFutureDate("2023-07-15");

    const appointmentsRepository = new InMemoryAppointmentsRepository();
    const createAppointment = new CreateAppointment(appointmentsRepository);

    expect(
      createAppointment.execute({
        customer: "Fred Lisboa",
        startsAt,
        endsAt,
      })
    ).resolves.toBeInstanceOf(Appointment);
  });

  it("should not be able to create another appointment with overlapping dates", async () => {
    const startsAt = getFutureDate("2023-06-20");
    const endsAt = getFutureDate("2023-06-30");

    const appointmentsRepository = new InMemoryAppointmentsRepository();
    const createAppointment = new CreateAppointment(appointmentsRepository);

    await createAppointment.execute({
      customer: "Fred Lisboa",
      startsAt,
      endsAt,
    });

    expect(
      createAppointment.execute({
        customer: "Fred Lisboa",
        startsAt: getFutureDate("2023-06-23"),
        endsAt: getFutureDate("2023-07-07"),
      })
    ).rejects.toBeInstanceOf(Error);

    expect(
      createAppointment.execute({
        customer: "Fred Lisboa",
        startsAt: getFutureDate("2023-06-02"),
        endsAt: getFutureDate("2023-06-29"),
      })
    ).rejects.toBeInstanceOf(Error);

    expect(
      createAppointment.execute({
        customer: "Fred Lisboa",
        startsAt: getFutureDate("2023-06-23"),
        endsAt: getFutureDate("2023-06-27"),
      })
    ).rejects.toBeInstanceOf(Error);
  });
});
