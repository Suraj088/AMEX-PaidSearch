export interface CardCategoryControls {
  radioGroup: HTMLFieldSetElement;
  radioControls: HTMLInputElement[];
}

export function getCardCategoryControls(): CardCategoryControls {
  const radioGroup = document.querySelector<HTMLFieldSetElement>('#card-category-group');

  if (!radioGroup) {
    throw new Error('Did not find a #card-category-group container');
  }

  const radioControls = ([] as HTMLInputElement[]).slice.call(
    radioGroup.querySelectorAll('input[type="radio"]')
  );

  if (radioControls.length === 0) {
    throw new Error('Did not find any radio input controls in #card-category-group');
  }

  return { radioGroup, radioControls };
}
