export async function verifikasiPenyedia(db, email) {
  const hasil = await db.query(
    `UPDATE penyedia AS py
     SET status_verifikasi = 'terverifikasi'
     FROM pengguna AS u
     WHERE py.pengguna_id = u.id
       AND u.email = $1
       AND u.peran = 'penyedia'
     RETURNING py.id`,
    [email],
  );

  if (hasil.rowCount !== 1) {
    throw new Error(
      `Profil penyedia tidak ditemukan untuk email: ${email}`,
    );
  }

  return hasil.rows[0];
}
