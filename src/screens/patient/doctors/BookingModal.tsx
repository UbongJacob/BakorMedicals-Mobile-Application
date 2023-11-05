import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import AppText from "../../../components/AppText";
import Size from "../../../utilities/useResponsiveSize";
import {
  extractDateInfo,
  formatTimeToAmPm,
  getWeekdaysInNext30Days,
  getWorkingHoursWithDifference,
} from "../../../utilities/timeHelpers";
import { useState } from "react";
import colors from "../../../configs/colors";

const BookingModal = (): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  const handleSelection = (date: Date) => {
    if (date.getUTCDate() === selectedDate?.getUTCDate()) setSelectedDate(null);
    else setSelectedDate(date);
  };

  const handleTimeSelect = (time: Date) => {
    if (time.getTime() === selectedTime?.getTime()) setSelectedTime(null);
    else setSelectedTime(time);
  };

  const isSeletedDate = (date: Date) =>
    date.getUTCDate() === selectedDate?.getUTCDate();

  const isSelectedTime = (time: Date) =>
    time.getTime() === selectedTime?.getTime();

  return (
    <>
      <AppText style={{ marginTop: Size.calcHeight(20) }}>
        Confirm booking details with{" "}
        <AppText style={{ fontWeight: "600" }}>Ubong Jacob</AppText>{" "}
      </AppText>
      <View style={{ flex: 1 }}>
        <View style={{ paddingVertical: Size.calcHeight(30) }}>
          <AppText>Choose date</AppText>
          <ScrollView
            contentContainerStyle={{
              paddingVertical: Size.calcHeight(10),
            }}
            horizontal
          >
            {getWeekdaysInNext30Days().map((value, index) => {
              const { dayOfMonth, dayOfWeek, month } = extractDateInfo(value);
              return (
                <TouchableOpacity
                  onPress={() => handleSelection(value)}
                  key={index}
                  style={[
                    styles.dateCard,
                    isSeletedDate(value) && {
                      backgroundColor: colors.BLUE100,
                    },
                  ]}
                >
                  <AppText
                    style={[
                      styles.dateCardDay,
                      isSeletedDate(value) && styles.dateCardDayActive,
                    ]}
                  >
                    {dayOfWeek}
                  </AppText>
                  <AppText
                    style={[
                      styles.dateCardNum,
                      isSeletedDate(value) && styles.dateCardDayActive,
                    ]}
                  >
                    {dayOfMonth}
                  </AppText>
                  <AppText
                    style={[
                      styles.dateCardDay,
                      isSeletedDate(value) && styles.dateCardDayActive,
                    ]}
                  >
                    {month}
                  </AppText>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {!getWorkingHoursWithDifference(selectedDate) ? (
          <AppText>No time slot found. </AppText>
        ) : (
          <>
            <AppText>Select time slot</AppText>
            <View
              style={{
                flexDirection: "row",
                marginTop: Size.calcHeight(20),
                flexWrap: "wrap",
              }}
            >
              {getWorkingHoursWithDifference(selectedDate)?.map(
                (value, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => handleTimeSelect(value)}
                      key={index}
                      style={[
                        styles.dateCard,
                        { marginBottom: Size.calcHeight(20) },
                        isSelectedTime(value) && {
                          backgroundColor: colors.BLUE100,
                        },
                      ]}
                    >
                      <AppText
                        style={[
                          styles.dateCardDay,
                          isSelectedTime(value) && styles.dateCardDayActive,
                        ]}
                      >
                        {formatTimeToAmPm(value.getHours())}
                      </AppText>
                    </TouchableOpacity>
                  );
                }
              )}
            </View>
          </>
        )}
        <AppText style={{ fontWeight: "500", marginTop: Size.calcHeight(20) }}>
          Selected date and time: {selectedDate?.toDateString()}{" "}
          {!!selectedTime && (
            <AppText>by {formatTimeToAmPm(selectedTime?.getHours())}</AppText>
          )}
        </AppText>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  dateCard: {
    paddingVertical: Size.calcHeight(12),
    paddingHorizontal: Size.calcWidth(20),
    backgroundColor: colors.BLUE500,
    borderRadius: Size.calcAverage(10),
    marginRight: Size.calcWidth(20),
  },
  dateCardNum: {
    fontSize: Size.calcAverage(19),
    fontWeight: "600",
    marginVertical: Size.calcHeight(4),
  },
  dateCardDay: {
    fontSize: Size.calcAverage(14),
    color: "gray",
    fontWeight: "500",
  },
  dateCardDayActive: {
    color: colors.WHITE100,
  },
});

export default BookingModal;
