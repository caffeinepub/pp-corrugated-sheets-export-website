# Specification

## Summary
**Goal:** Fix the "Error 400: Canister ID Not Resolved" deployment error so the SG Exporters site loads correctly on ICP.

**Planned changes:**
- Ensure canister ID environment variables are properly injected at build time
- Verify and correct dfx.json configuration for valid canister references
- Confirm the frontend asset canister is correctly configured to resolve the canister ID

**User-visible outcome:** The deployed SG Exporters site loads without a 400 error, and all existing sections render correctly via a valid ICP deployment URL.
