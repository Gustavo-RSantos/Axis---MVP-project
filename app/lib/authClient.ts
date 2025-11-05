export async function getDataUser(data: { email: string; password: string }) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: 'include', 
    });
    return await res.json();
  } catch (error) {
    console.error("Erro ao chamar API de login:", error);
    return { success: false, message: "Erro ao conectar ao servidor" };
  }
}


export async function logoutUser() {
  try {
    const res = await fetch('/api/logout', {
      method: 'POST',
      credentials: 'include',  
    });
    
    const data = await res.json();
    if (data.success) {
      console.log('Logout realizado com sucesso');
    } else {
      console.error('Erro no logout:', data.message);
    }
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
  }
}