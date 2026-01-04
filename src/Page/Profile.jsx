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
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-100 to-base-200 py-8 px-4">
  {/* Background decorative elements */}
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
  </div>
  
  <div className="max-w-6xl mx-auto relative z-10">
    {/* Success Toast */}
    {success && (
      <div className="toast toast-top toast-center z-50 animate-fadeIn">
        <div className="alert alert-success shadow-lg max-w-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <span className="font-semibold">Profile Updated Successfully!</span>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Profile Header Card */}
    <div className="mb-8">
      <div className="bg-base-100 rounded-3xl shadow-2xl overflow-hidden border border-base-300">
        {/* Profile Banner */}
        <div className="h-32 bg-gradient-to-r from-primary/20 via-secondary/10 to-accent/10 relative">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="relative">
              <div className="avatar">
                <div className="w-32 h-32 rounded-full border-4 border-base-100 shadow-2xl overflow-hidden">
                  <img
                    src={
                      user?.photoURL ||
                      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80"
                    }
                    alt="User Avatar"
                    className="w-full h-full object-cover bg-gradient-to-br from-base-300 to-base-200"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80";
                    }}
                  />
                </div>
              </div>
              
              {/* Status Indicator */}
              <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-success border-2 border-base-100"></div>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="pt-16 pb-8 px-6 text-center">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {user?.displayName || "PawMart User"}
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg opacity-70">{user?.email}</span>
              <span className="badge badge-primary badge-sm">Verified</span>
            </div>
          </div>

       

          {/* Update Button */}
          <div className="flex justify-center">
            <button
              onClick={handleIsOpen}
              className="btn btn-primary btn-lg rounded-full px-8 hover:scale-105 transition-transform shadow-lg shadow-primary/25 group"
            >
              <span className="text-xl mr-2">✨</span>
              <span>Update Profile</span>
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Additional Profile Sections */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* Quick Links */}
      <div className="bg-base-100 rounded-2xl p-6 border border-base-300 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
            <span className="text-xl">🔗</span>
          </div>
          <div>
            <h3 className="text-xl font-bold">Quick Links</h3>
            <p className="text-sm opacity-70">Navigate faster</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <a href="/mylistings" className="btn btn-outline btn-sm rounded-lg">
            My Listings
          </a>
          <a href="/myorder" className="btn btn-outline btn-sm rounded-lg">
            My Orders
          </a>
         
        </div>
      </div>
    </div>

    {/* Update Form Modal */}
    {isOpen && (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className="modal modal-open">
          <div className="modal-box bg-base-100 rounded-3xl border-2 border-primary/20 shadow-2xl max-w-md p-0 overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/5 p-6 border-b border-base-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-lg">✨</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-base-content">
                      Edit Profile
                    </h3>
                    <p className="text-sm opacity-70">Update your information</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="btn btn-ghost btn-circle hover:bg-base-300 transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <form onSubmit={handleUpdateProfile} className="space-y-6">
                {/* Display Name Field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg flex items-center gap-2">
                      <span className="text-primary">👤</span>
                      Display Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName || ""}
                    className="input input-bordered w-full bg-base-200 border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 text-lg py-3"
                    placeholder="e.g., PetLoverX, ShopOwnerY"
                    required
                  />
                  <label className="label">
                    <span className="label-text-alt opacity-70">
                      This will be visible to other users
                    </span>
                  </label>
                </div>

                {/* Profile Photo URL Field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg flex items-center gap-2">
                      <span className="text-primary">📷</span>
                      Profile Photo URL
                    </span>
                  </label>
                  <input
                    type="url"
                    name="photoUrl"
                    defaultValue={user?.photoURL || ""}
                    className="input input-bordered w-full bg-base-200 border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 text-lg py-3"
                    placeholder="https://example.com/pet-avatar.jpg"
                    required
                  />
                  <div className="flex items-center justify-between label">
                    <span className="label-text-alt opacity-70">
                      Provide a direct image link
                    </span>
                    <button
                      type="button"
                      className="btn btn-xs btn-ghost"
                      onClick={() => {
                        // Suggest random avatar
                        const avatars = [
                          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80",
                          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
                          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
                        ];
                        document.getElementsByName('photoUrl')[0].value = avatars[Math.floor(Math.random() * avatars.length)];
                      }}
                    >
                      Get random avatar
                    </button>
                  </div>
                </div>

                {/* Preview Section */}
                <div className="bg-base-200/50 rounded-xl p-4 border border-base-300">
                  <label className="label">
                    <span className="label-text font-semibold">Preview</span>
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="w-12 h-12 rounded-full bg-base-300 overflow-hidden">
                        <img
                          src={user?.photoURL || "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80"}
                          alt="Preview"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80";
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">{user?.displayName || "Your Name"}</p>
                      <p className="text-sm opacity-70">Profile preview</p>
                    </div>
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="modal-action pt-4 border-t border-base-300">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="btn btn-outline btn-lg rounded-xl px-6 hover:scale-105 transition-transform"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={`btn btn-primary btn-lg rounded-xl px-8 hover:scale-105 transition-transform shadow-lg shadow-primary/25 ${
                      loading ? "loading" : ""
                    }`}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="loading loading-spinner loading-sm"></span>
                        Saving...
                      </>
                    ) : (
                      <>
                        <span className="text-xl mr-2">💾</span>
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
</div>
  );
};

export default Profile;
