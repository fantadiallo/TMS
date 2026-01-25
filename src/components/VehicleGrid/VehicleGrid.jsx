import VehicleCard from "../VehicleCard/VehicleCard";


export default function VehicleGrid({ items = [] }) {
  return (
    <div className="grid-3">
      {items.map((v) => (
        <VehicleCard key={v.id} {...v} />
      ))}
    </div>
  );
}
