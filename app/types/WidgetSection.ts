interface WidgetItem {
  label: string;
  icon: React.ReactNode;
}

interface WidgetSection {
  label: string;
  items: WidgetItem[];
}

export { type WidgetSection };
