import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const users = this.showUserProfileUseCase.execute({ user_id });
      return response.json(users);
    } catch (err) {
      return response.status(404).json({ error: err.message });
    }
  }
}

export { ShowUserProfileController };
