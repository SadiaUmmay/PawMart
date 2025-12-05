import React from "react";
import { AuthContext } from "../Provider/AuthProvider";
import auth from "../firebase/firebase.config";
import { updateProfile } from "firebase/auth";

const Profile = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
 
  const { user, setUser } = React.useContext(AuthContext);

  const handleIsOpen = () => {
    if (!user) {
      
      alert("Please log in to update your profile.");
      return;
    }
    setIsOpen((prev) => !prev);
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    try {
     
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoUrl,
      });

     
      setUser({ ...user, displayName: name, photoURL: photoUrl });
      setSuccess(true);
      setLoading(false);

      // Close modal and clear success message after a delay
      setTimeout(() => {
        setIsOpen(false);
        setSuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Profile update error:", error); 
    
      alert("Failed to update profile. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300 py-8 px-4">
      <div className="max-w-6xl mx-auto">
       
        {success && (
          <div className="toast toast-top toast-center z-50">
            <div className="alert alert-success animate-fadeIn">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Profile Updated Successfully!</span>
            </div>
          </div>
        )}

        {/* Profile Header Card */}
        <div className="card bg-base-100 shadow-2xl mb-8">
          <div className="card-body items-center text-center">
            {/* Avatar */}
            <div className="avatar mb-4">
              <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
                <img
                  src={
                    user?.photoURL ||
                    "https://via.placeholder.com/150/505050/FFFFFF?text=Paw"
                  }
                  alt="User Avatar"
                  className="bg-base-300"
                  onError={(e) => {
                    // Fallback to a themed placeholder image on error
                    e.target.src =
                      "https://via.placeholder.com/150/505050/FFFFFF?text=Paw";
                  }}
                />
              </div>
            </div>

            {/* User Info */}
            <h1 className="text-3xl font-bold text-primary">
              {user?.displayName || "PawMart User"}
            </h1>
            <p className="text-lg opacity-70">{user?.email}</p>
           
          

            {/* Update Button */}
            <div className="card-actions mt-6">
              <button
                onClick={handleIsOpen}
                className="btn btn-primary btn-lg gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Update Profile
              </button>
            </div>
          </div>
        </div>

        {/* Update Form Modal */}
        {isOpen && (
         
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-40">
            <div className="modal modal-open">
              <div className="modal-box max-w-md">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-primary">
                    Edit Your Profile
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="btn btn-sm btn-circle btn-ghost"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleUpdateProfile} className="space-y-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Display Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={user?.displayName || ""}
                      className="input input-bordered w-full"
                      placeholder="e.g., PetLoverX, ShopOwnerY"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Profile Photo URL
                      </span>
                    </label>
                    <input
                      type="url"
                      name="photoUrl"
                      defaultValue={user?.photoURL || ""}
                      className="input input-bordered w-full"
                      placeholder="https://example.com/pet-avatar.jpg"
                      required
                    />
                    <label className="label">
                      <span className="label-text-alt text-base-content/60">
                        Provide a direct link to your profile image 
                      </span>
                    </label>
                  </div>

                  <div className="modal-action">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="btn btn-ghost"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className={`btn btn-primary ${loading ? "loading" : ""}`}
                      disabled={loading}
                    >
                      {loading ? "Saving..." : "Save Changes"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

       
      
       
      </div>
    </div>
  );
};

export default Profile;
