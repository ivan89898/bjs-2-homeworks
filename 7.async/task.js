class AlarmClock {
  constructor(alarmCollection, intervalId) {
    this.alarmCollection = alarmCollection = [];
    this.intervalId = intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    }

    if (this.alarmCollection.some((alarm) => alarm.time === time)) {
      console.warn("Уже присутствует звонок на это же время");
    }
    const newAlarm = { time, callback, canCall: true };
    this.alarmCollection.push(newAlarm);
  }
  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      (alarm) => alarm.time !== time
    );
  }
  getCurrentFormattedTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }
  start() {
    if (this.intervalId) {
      return;
    }
    this.intervalId = setInterval(() => {
      const currentTime = this.getCurrentFormattedTime();

      this.alarmCollection.forEach((alarm) => {
        if (alarm.time === currentTime && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }, 1000);
  }
  stop() {
    console.log(this.intervalId);
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  resetAllCalls() {
    this.alarmCollection.forEach((alarm) => {
      alarm.canCall = true;
    });
  }
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
