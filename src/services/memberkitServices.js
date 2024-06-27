const getApiKey = () => {
  return process.env.NEXT_PUBLIC_MEMBERKIT_API_KEY;
}

export async function createOrUpdateUser(fullName, email, mobile, classroomIds, expiresAt) {
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error('API key is missing');
  }

  const body = {
    full_name: fullName,
    email: email,
    phone_number: mobile,
    status: 'active',
    classroom_ids: classroomIds,
    expires_at: expiresAt
  };

  try {
    const response = await fetch('https://memberkit.com.br/api/v1/users?api_key='+apiKey, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Error creating/updating user: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create/update user');
  }
}

export async function getClassrooms() {
    const apiKey = getApiKey();
    if (!apiKey) {
      throw new Error('API key is missing');
    }
  
    try {
      const response = await fetch('https://memberkit.com.br/api/v1/classrooms?api_key='+apiKey, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error fetching membership levels: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch membership levels:', error);
      throw new Error('Failed to fetch membership levels');
    }
  }

  export async function getUsers() {
    const apiKey = getApiKey();
    if (!apiKey) {
      throw new Error('API key is missing');
    }
  
    try {
      console.log('Fetching users with API key:', apiKey);
      const response = await fetch('https://memberkit.com.br/api/v1/users?api_key=' + apiKey, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      console.log('Response status:', response.status);
      if (!response.ok) {
        throw new Error(`Error fetching users: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch users:', error);
      throw new Error('Failed to fetch users');
    }
  }
  
  
  export async function getUserById(id) {
    const apiKey = getApiKey();
    if (!apiKey) {
      throw new Error('API key is missing');
    }
  
    try {
      const response = await fetch('https://memberkit.com.br/api/v1/users/'+id+'?api_key='+apiKey, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error fetching user with ID ${id}: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch user with ID ${id}`);
    }
  }
  
  export async function getCourseById(id) {
    const apiKey = getApiKey();
    if (!apiKey) {
      throw new Error('API key is missing');
    }
  
    try {
      console.log('Fetching course with ID:', id, 'and API key:', apiKey);
      const response = await fetch('https://memberkit.com.br/api/v1/courses/'+id+'?api_key='+apiKey, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      console.log('Response status:', response.status);
      if (!response.ok) {
        throw new Error(`Error fetching course with ID ${id}: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Failed to fetch course with ID ${id}:`, error);
      throw new Error(`Failed to fetch course with ID ${id}`);
    }
  }

  export async function getMemberships() {
    const apiKey = getApiKey();
    if (!apiKey) {
      throw new Error('API key is missing');
    }
  
    try {
      console.log('Fetching memberships with API key:', apiKey);
      const response = await fetch('https://memberkit.com.br/api/v1/memberships?api_key'+apiKey, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      console.log('Response status:', response.status);
      if (!response.ok) {
        throw new Error(`Error fetching memberships: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch memberships:', error);
      throw new Error('Failed to fetch memberships');
    }
  }

  