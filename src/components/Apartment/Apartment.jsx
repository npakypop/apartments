function Apartment({ item, onDeleteApartment }) {
  return (
    <div style={{ border: "1px solid grey", marginBottom: 20 }}>
      <h3>{item.name}</h3>
      <p>
        <strong>Rooms:</strong> {item.rooms}
      </p>
      <p>
        <strong> Price:</strong> {item.price}
      </p>
      <p>{item.description}</p>
      <button type="button" onClick={() => onDeleteApartment(item.id)}>
        ❌
      </button>
      <button type="button">⭐</button>
    </div>
  );
}

export default Apartment;
