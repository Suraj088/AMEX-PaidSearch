export function setSelectValue(select: HTMLSelectElement, value: string): void {
  select.value = value;
  console.debug(`Synced radio value "${value}" to select control.`);
}

export function setRadiosValue(radios: HTMLInputElement[], value: string): void {
  for (const radio of radios) {
    if (radio.value === value) {
      radio.checked = true;
      console.debug(`Synced select value "${value}" to radio controls.`);
    }
  }
}
